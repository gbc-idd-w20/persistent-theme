// Apply a theme as a class, store the theme as a default for next time
let setTheme = (mode) => {

	// Remove both modes
	document.body.classList.remove('light')
	document.body.classList.remove('dark')

	// Add the mode requested
	document.body.classList.add(mode)

	// Store it in the browser for next time
	window.localStorage.setItem('mode', mode)
}

// Swap the theme from light to dark, or dark to light, based on what you have set now
let flipTheme = (event) => {

	// If light, go dark, if dark, go light
	if (defaultMode == 'light') {
		defaultMode = 'dark'
	} else {
		defaultMode = 'light'
	}

	// Apply it
	setTheme(defaultMode)
}


// ***** CODE STARTS RUNNING HERE:

// Check if there's a "mode" variable in local storage, or if not, default to 'light'
let defaultMode = window.localStorage.getItem('mode') || 'light'

// Apply the theme determined above
setTheme(defaultMode)

// If you click the button, flip the theme
document.querySelector('#theme').addEventListener('click', flipTheme)



// ***** MORE:

// If you wanted to check which theme the user prefers (based on operating system settings)
// either of these will return true (if its the theme) or false if it's not
// You could use this to replace "light" as the theme (above)
let dark = window.matchMedia('(prefers-color-scheme: dark)').matches
let light = window.matchMedia('(prefers-color-scheme: light)').matches

if (dark) {
	console.log(`Looks like you're into dark mode`)
} else if (light) {
	console.log(`Plain ol' light mode, huh?`)
}
