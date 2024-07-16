import pyautogui as pag
import time

from tkinter import *
import tkinter as tk

#add new row
row_number = 8
def generate_row():
   global row_number
   custom_row_header_entry=Entry(second_frame,textvariable ="header_row"+str(row_number))
   custom_row_header_entry.grid(column=0)
   custom_row_description_entry=Entry(second_frame,textvariable ="desciption_row"+str(row_number))
   custom_row_description_entry.grid(column=1,row=row_number)
   row_number += 1
#python interface
window = tk.Tk()
window.title("HTML generator")
window.geometry('800x500')
window.config(bg="grey")

#create scroll
main_frame = Frame(window) 
main_frame.grid(column = 0, row = 0, sticky = 'NSEW')

my_canvas = Canvas(main_frame)
my_canvas.grid(column = 0, row = 0,sticky = 'w')

my_scrollbar = tk.Scrollbar(main_frame, orient = VERTICAL,command = my_canvas.yview)
my_scrollbar.grid(column = 4, row = 0,sticky = 'NSE')

my_canvas.configure(yscrollcommand = my_scrollbar.set)
my_canvas.bind('<Configure>',lambda e: my_canvas.configure(scrollregion = my_canvas.bbox("all")))

second_frame = Frame(my_canvas, bg = 'green')

my_canvas.create_window((0,0), window = second_frame, anchor= 'nw', width= 800, height=800)

second_frame.config(bg="blue")

title_label=Label(second_frame, text="Title")
title_label.grid(column=0,row=1)
title_entry=Entry(second_frame)
title_entry.grid(column=0,row=2)
image_1_label=Label(second_frame, text="Image 1 URL")
image_1_label.grid(column=0,row=3)
image_1_entry=Entry(second_frame)
image_1_entry.grid(column=0,row=4)
image_2_label=Label(second_frame, text="Image 2 URL")
image_2_label.grid(column=1,row=3)
image_2_entry=Entry(second_frame)
image_2_entry.grid(column=1,row=4)

custom_row_label=Label(second_frame, text="Item Description Custom Rows")
custom_row_label.grid(column=0,row=5)

custom_row_header_label=Label(second_frame, text=" Row Header")
custom_row_header_label.grid(column=0,row=6)
custom_row_name_entry=Entry(second_frame)
custom_row_name_entry.grid(column=0,row=7)
custom_row_description_label=Label(second_frame, text=" Row Description")
custom_row_description_label.grid(column=1,row=6)
custom_row_ndescription_entry=Entry(second_frame)
custom_row_ndescription_entry.grid(column=1,row=7)

generate_row=tk.Button(second_frame, text="Add new Custom Row", command=generate_row).grid(column=2,row=6)


generateHTML=tk.Button(second_frame, text="Generate HTML").grid(column=3,row=6)


window.mainloop()