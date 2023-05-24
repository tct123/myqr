"""
A Simple QR App.
"""
import toga
from toga.style import Pack
from toga.style.pack import COLUMN, ROW
import pyqrcode
from pyzbar.pyzbar import decode
from PIL import Image


class MyQR(toga.App):

    def startup(self):
        """
        Construct and show the Toga application.

        Usually, you would add your application to a main content box.
        We then create a main window (with a name matching the app), and
        show the main window.
        """
        main_box = toga.Box()

        self.main_window = toga.MainWindow(title=self.formal_name)
        self.main_window.content = main_box
        self.main_window.show()
        self.readqr(widget)
    def createqr(self, widget):
        pass
    def readqr(self, widget):
        data = decode(Image.open("resources/image.png"))
        print(data)


def main():
    return MyQR()
