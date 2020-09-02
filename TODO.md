# Todos for Contest Pug (Client and server)
* [ ] Add admin links, factor code into mixins
* [ ] Add problems route, create new service
  * [ ] Setup short answer and free repsonse
    * [ ] Stretch goal: Multipule choice
* [ ] Create answers service, allow contestants to submit answers
* [ ] After submit, create new item in score model

# Model for backend
## questions:
contest_id: serial
index: number
points: number, default 0
question: string
free_response: boolean
multipule_choice: boolean

## short_answer
question_id: serial
answer: any

## free_response
question_id: serial
user_id: serial
repsonse: string
graded: boolean
score: number

## multipule_choice
question_id: serial
choices: [string] 
  - choice: string
answer: number(index)

## scores
contest_id: serial
user_id: serial
total: number
score: number
