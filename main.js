var appData = {
  mode: 'edit',
  words: {
    "red": "rot",
    "blue": "blau",
    "black": "schwarz",
    "white": "weiß",
    "green": "grün",
    "orange": "orange"
  },
  edit: {
    original: "",
    translation: "",
    minWords: 5
  },
  test: {
    question: "",
    answer: "",
    questions: []
  }
}

window.addEventListener('load', function() {
  var app = new Vue({
    el: "#translation-app",
    data: appData,
    methods: {
      add: function() {
        if(this.edit.original === "" || this.edit.translation === "") {
          alert("Both words need to be filled")
          return
        }

        Vue.set(this.words, this.edit.original.toLowerCase(), this.edit.translation.toLowerCase())
        this.edit.original = this.edit.translation = ""
      },


      remove: function(original) {
        Vue.delete(this.words, original)
      },


      startTest: function() {
        if(Object.keys(this.words).length < this.edit.minWords) {
          alert(`There are not enough words to start the test. Please insert at least ${this.edit.minWords} words`)
          return
        }

        const words = Object.keys(this.words)
        var selectedWords = {}
        while(Object.keys(selectedWords).length < this.edit.minWords) {
          const word = words[Math.floor(Math.random() * words.length)]
          selectedWords[word] = this.words[word]
        }

        var questions = []
        for(var key in selectedWords) {
          questions.push({original: key, translation: selectedWords[key], answer: ""})
        }
        this.test.questions = questions
        this.test.progress = 1 / questions.length * 100
        this.test.answered = 0
        this.test.question = this.test.questions[0].original
        this.mode = "test"
      },


      submitTest: function() {
        if(this.test.answer === "") {
          alert("Please provide an answer")
          return
        }

        this.test.questions[this.test.answered].answer = this.test.answer.toLowerCase()
        ++this.test.answered
        this.test.progress = ((this.test.answered + 1)/ this.test.questions.length) * 100
        this.test.answer = ""
        if(this.test.answered == this.test.questions.length) {
          this.showResults()
        } else {
          this.test.question = this.test.questions[this.test.answered].original
        }
      },


      showResults: function() {
        const hits = this.test.questions.filter((q) => q.translation == q.answer).length
        this.test.ratio = (hits / this.test.questions.length) * 100.0
        this.mode = "results"
      },


      back: function() {
        this.mode = 'edit'
      }
    }
  })
})
