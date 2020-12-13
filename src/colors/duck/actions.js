
export const CHANGE_NAVBAR= 'CHANGE_NAVBAR';
export const CHANGE_BODY ='CHANGE_BODY';
export const CHANGE_ICON ='CHANGE_ICON';
export const CHANGE_BUTTON ='CHANGE_BUTTON';
export const CHANGE_FONT ='CHANGE_FONT';
export const CHANGE_PAGE_INCREMENT ='CHANGE_PAGE_INCREMENT';
export const CHANGE_PAGE_DECREMENT='CHANGE_PAGE_DECREMENT';

export const changeNavbar = (navBar) => ({
        type: CHANGE_NAVBAR,
        payload: {
            navBar
        }
    }
)
export const changeBody = (body) => ({
        type: CHANGE_BODY,
        payload: {
            body
        }
    }
)
export const changeIcon = (icon) => ({
        type: CHANGE_ICON,
        payload: {
            icon
        }
    }
)
export const changeButton = (button) => ({
        type: CHANGE_BUTTON,
        payload: {
            button
        }
    }
)
export const changeFont = (font) => ({
        type: CHANGE_FONT,
        payload: {
            font
        }
    }
)
export const changePageAboutMe_increment = (pageAboutMe) => ({
    type: CHANGE_PAGE_INCREMENT
})
export const changePageAboutMe_decrement = (pageAboutMe) => ({
    type: CHANGE_PAGE_DECREMENT
})



