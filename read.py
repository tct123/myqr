import pyqrcode
from pyzbar.pyzbar import decode
from PIL import Image
import cv2

qr = pyqrcode.create("test123")
qr.png("mycode.png",scale=8)
data = decode(Image.open("myqrcode.png"))