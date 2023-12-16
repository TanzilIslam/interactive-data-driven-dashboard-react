import Image01 from '../images/user-36-05.jpg'
import Image02 from '../images/user-36-06.jpg'
import Image03 from '../images/user-36-07.jpg'
import Image04 from '../images/user-36-08.jpg'
import Image05 from '../images/user-36-09.jpg'

// Create an array of images
const images = [Image01, Image02, Image03, Image04, Image05]

// Shuffle the array using the Fisher-Yates algorithm
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

// Shuffle the images array
shuffleArray(images)

// Generate 10 users with shuffled images
export const users = Array.from({ length: 100 }, (_, index) => ({
  id: `${index}`,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  location: '🌍',
  spent: `$${(Math.random() * 1000).toFixed(2)}`,
  image: images[index % 5], // Cycling through the shuffled images
}))

export const userDetail = [
  { label: 'Full name', value: 'Mohammad Tanzil Islam' },
  { label: 'Application for', value: 'Frontend Developer' },
  { label: 'Email address', value: 'tanjilislam90@gmail.com' },
  { label: 'Salary expectation', value: 'As per the job market' },
  {
    label: 'About',
    value:
      'Expert In React, Vue <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem quos, optio consequatur expedita provident ab temporibus magnam? Accusamus provident, aspernatur eveniet quos quia similique doloremque saepe quo assumenda sed numquam!',
  },
]
export const userForm = {
  name: 'Tanzil',
  email: 'tanjilislam90@gmail.com',
  password: '123456',
  checkbox: true,
  radio: 'option1',
  toggle: true,
  select: 'option1',
  file: null,
  textarea: 'Hi, I am a Frontend Developer',
  date: '2023-12-16',
  dateRange: '2023-12-07T18:00:00.000Z to 2023-12-15T18:00:00.000Z',
}
