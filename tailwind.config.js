/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'black':'#030303',
      'brown':'#7A746E',
      'cream':'#FFF7F0',
      'blue':'#755CDE',
      'yellow':'#F6A560',
      'pink':'#F39E9E',
      'red':'#EB7565',
      'cyan':'#61C4B7',
      'purple':'#552049',
      'white':'#FFFFFF'
    },
    fontSize:{
      base:'18px',
      'Heading-S':'32px',
      'Heading-M':'40px',
      'Heading-L':'56px',
      'Heading-L-tablet':'44px',
      'Heading-L-mobile':'36px',
      'Heading-M-mobile':'26px',
      'p-mobile':'16px',
      'sub':'24px',
    },
    lineHeight:{
      '70':'70px',
      '51':'51px',
      '40':'40px',
      '28':'28px'
    },
    // fontFamily:{

    // }
  },
  plugins: [],
}

