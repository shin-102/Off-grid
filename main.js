import './src/index.css'

var app = document.getElementById("app") ;
app.style.cssText = "color:white;"
app.style.background = "black url('https://images.unsplash.com/photo-1686582906586-7e7dda99ece4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat"

//* Function to set a typographic scale
function setTypeScale() {
    // font sizes for each heading
    const fontSizes = {
        'h1': '5.61rem', 
        'h2': '4.209rem',
        'h3': '3.157rem',
        'h4': '2.369rem',
        'h5': '1.777rem',
        'h6': '1.333rem',
        'small': '0.75rem'
    };

    // Iterate over each tag name and set the font size
    for (const tag in fontSizes) {
        const elements = document.getElementsByTagName(tag);
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.fontSize = fontSizes[tag];
        }
    }
}
setTypeScale();
