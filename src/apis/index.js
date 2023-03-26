export const QUESTIONS_API = 'https://ms-lh-hackathon-2023.onrender.com/api/questions'

export const REQUEST_OPTIONS = (body) => {
  return ({
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}