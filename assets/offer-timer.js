class CountdownTimer extends HTMLElement{
    constructor(){
      super()
      this.timerId
      
      this.inputDate = this.dataset.dateInput
  
      //section timer element
      this.daysElement = this.querySelector("#countdownDays")
      this.hoursElement = this.querySelector("#countdownHours")
      this.minutesElement = this.querySelector("#countdownMinutes")
      
      this.startTimer()
    }
    replaceTime(){
    const dateArray = this.inputDate.split("/")
      this.targetDate = new Date(parseInt(dateArray[2]), parseInt(dateArray[1])-1, parseInt(dateArray[0]))
      this.currentDate = new Date()
  
      if (this.targetDate > this.currentDate) {
        let diffDuration = this.targetDate.getTime() - this.currentDate.getTime();
  
        let remainingDays = Math.floor(diffDuration / (1000 * 60 * 60 * 24));
        let remainingHours = Math.floor((diffDuration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let remainingMinutes = Math.floor((diffDuration % (1000 * 60 * 60)) / (1000 * 60));
  
        //updating section timer elements
        const days = String(remainingDays)
        this.daysElement.innerText = days
  
        const hours = String(remainingHours)
        this.hoursElement.innerText = String(hours).length == 1 ? `0${hours}` : hours
  
        const minutes = String(remainingMinutes)
        this.minutesElement.innerText = minutes
      }
    }
    startTimer(){
      clearInterval(this.timerId)
      this.timerId = setInterval(this.replaceTime.bind(this), 1000)
    }
  }
  
  customElements.define("timer-element", CountdownTimer)