---
layout: post
title: "Generating barcode PDFs with Rails"
description: "Using Barby and Prawn to imprint PDFs with individual barcodes."
category: rails
---

For a project, I was researching methods to generate individual PDFs with imprinted EAN barcodes. Some of the how-tos and blog articles I found were quite old, and it was not directly obvious if the solution still works and can be recommended in 2023. The following represents my short note-taking of a decent way to do this. There may be other or better ways, but this one works for me.

[Barby](https://github.com/toretore/barby) is a barcode generator library for Ruby. It generates a barcode as an image or as a PDF. For creating the actual PDF with background image I am using the [Prawn](https://github.com/prawnpdf/prawn) PDF generation library for Ruby. It produces PDFs from scratch and annotates existing PDFs with text, images, and barcodes.

I am using two model classes, one for the voucher with the _code_ property (which shall be printed as a barcode), and one for the PDF generation. The PDF generation class is a subclass of _Prawn::Document_. It takes a path and a code as arguments and generates a PDF with the barcode imprinted. The voucher class creates a temporary file, calls the PDF generation class, and returns the path to the temporary file. As we are using Rails _Tempfile_, the temporary file is deleted automatically when the Rails process exits.

The resulting PDF should be 100mm x 133mm with a png as the background image. At first, I experimented with the _background_ option of _Prawn::Document_, but this did not work as expected. The background image didn't scale to the page size. Instead, I am using the _image_ method to draw the background image. The _fit_ option scales the image to the page size.

Prawn's measurement_extensions allow the use of mm as a unit for the page size instead of the default 1/72 inch.


```ruby
require "barby/barcode/code_128"
require "barby/outputter/prawn_outputter"
require "prawn/measurement_extensions"

class CodePdf < Prawn::Document
  def initialize path, code
    super({
      page_size: [100.mm, 177.mm],
      margin: 0
    })

    image background, fit: [100.mm, 177.mm]
    barcode code
    render_file path
  end

  def barcode code
    barcode = Barby::Code128.new code
    barcode.annotate_pdf self, height: 18.mm, x: 17.mm, y: 3.mm
  end
end
```

In the _code_ class, we create a temporary file and call the PDF generation class. The background image is found in the _app/assets/images/{language}_ directory. The name of the background image is stored in the _voucher_ property of the _price_ object (where the _code_ belongs_to). The _voucher_ property is a string like _voucher.png_. The _I18n.locale_ method returns the current locale, e.g. _de_ or _fr_ which is used to find the correct background image.

```ruby
def voucher
    # Create temporary file e.g. tmp/voucher20230805-66997-kozjms.pdf
    t = Tempfile.new "voucher", Rails.root.join("tmp")
    path = t.path + ".pdf"
    bg_path = Rails.root.join "app", "assets", "images", I18n.locale.to_s, price.voucher
    CodePdf.new path, code, bg_path
    path
end
```

The resulting PDF looks like this:

![PDF with barcode](/images/voucherpdf.png)
