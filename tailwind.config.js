module.exports = {
    mode:'jit',
    purge: ['./src/**/*.{js,jsx,html}','./public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'regal-blue': '#4c3398',
          'primary-regal-blue': '#5d3ebc',
          'secondary-regal-blue': '#7849f7',
          'header-color':'rgb(219, 219, 255)',
          'header-color-hover':'rgb(255,255,255)',
          'login-card':'#fafafa',
          'button-yellow':'#ffd300',
          
        },
        backgroundImage: {
          'campainsbackground':"url('https://cdn.getir.com/getirweb-images/common/illustration/doodle.png')",
          
          
        
      },
      boxShadow:{
        'etbisshadow':'0px 1px 6px #69748826',
      },
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  