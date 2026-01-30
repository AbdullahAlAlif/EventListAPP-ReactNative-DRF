from django.db import models
import qrcode
from io import BytesIO
from django.core.files.base import ContentFile
from PIL import Image

class Event(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    qr_code = models.ImageField(blank=True, upload_to='qr_codes/')
    date = models.DateTimeField()
    location = models.CharField(max_length=300)

    def __str__(self):
        return self.name
    def save(self, *args, **kwargs):
        # generating QR code based on name and date
        qr_data = f'Event: {self.name}\nDate: {self.date}\nLocation: {self.location}'
        if not self.qr_code:
            qrcode_img = qrcode.make(qr_data)
            if qrcode_img.mode != 'RGB':
                qrcode_img = qrcode_img.convert('RGB')
            width, height = qrcode_img.size
            canvas = Image.new('RGB', (width, height), 'white')
            canvas.paste(qrcode_img, (0, 0))
            fname = f'qr_code-{self.name}.png'
            buffer = BytesIO()
            canvas.save(buffer, 'PNG')
            self.qr_code.save(fname, ContentFile(buffer.getvalue()), save=False)
        super().save(*args, **kwargs)