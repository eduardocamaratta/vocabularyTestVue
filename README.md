# Vocabulary Test Vue

An extremely simple application to manage (and test) vocabulary for a foreign language. Written in Vue.


## Requirements

1. Write an application to manage vocabulary for a foreign language. It consists of a form where the user can insert two words, one for the native language (let's say English) and one for the foreign language (let's say German). The pair is appended to a list and can be deleted.

2. At any time the user can start a Test mode (add a button next to the list for it) which randomly chooses 5 words from the List in random order. The Test mode then only shows one word at a time and an input field where the user inserts the translated word. Submitting the translated word then shows the next word. The progress in the Test is indicated through a progress bar on top of the Test view. If no word is left, the Application will go to the Result view.

3. When the Test is finished, the Application calculates the results (hit ratio) and renders a Result view that shows the percentage of hits and a table showing all tested words, the translations and the user input. Every row should have a visual indication if it was a hit or a miss. With a Back button the user can return to the List.


## Notes

* The solution is extremely simple on purpose. The styling is ridiculously basic, and there are no fancy structures. The only library used is Vue.
* The solution is completely frontend, and the data isn't saved (not even in the localstorage). To make it easier to test, there are some words saved already.
* To start open the file index.html. Refresh to restart from scratch.