import pyautogui
import time
#pictures of object you want to search
usernameBox = 'LeagueOfLegends_Username_box.JPG'
passwordBox ='LeagueOfLegends_Password_box.JPG'
signInBox ='LeagueOfLegends_log_in.JPG'

mainSearching = True
usernameSearch = True
passwordSearch = True
logInSearch = True

username = ''
password = ''

def centerOfImage(locate):
    #calculation to find center of image
    passX = int(locate[0] + locate[2]/2)
    passY = int(locate[1] + locate[3]/2)
    return(passX, passY)
def enterUsername():
    pyautogui.click(centerOfImage(userBox))
    pyautogui.typewrite(username,interval=0.1)
def enterUserPassword():
    pyautogui.click(centerOfImage(passBox))
    pyautogui.typewrite(password,interval=0.1)
def clickLogInButton():
    pyautogui.click(centerOfImage(loginBox))

while mainSearching:
    
    while usernameSearch:
        #locate picture
        userBox = pyautogui.locateOnScreen(usernameBox, grayscale = False, confidence = 0.75)
        if userBox:
            enterUsername()
            usernameSearch = False
        else:
            print("still searching for username box")
            
    while passwordSearch:
        #locate picture
        passBox = pyautogui.locateOnScreen(passwordBox, grayscale = False, confidence = 0.75)
        if passBox:
            enterUserPassword()
            passwordSearch = False
        else:
            print("still searching for password box")     
            
    while logInSearch:
        #locate picture
        loginBox = pyautogui.locateOnScreen(signInBox, grayscale= False, confidence=0.75)
        if logInSearch:
            clickLogInButton()
            logInSearch = False
            mainSearching = False
        else:
            print("still searching for login box")
