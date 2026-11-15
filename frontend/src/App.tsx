import MyButton from "./MyButton"

const user = {
  name: 'Enes',
  age: 22,
  imageUrl: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp'
}
let bool = true;
if(bool) {
  user.imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICmPX7HVrXVG2gS_IWLY_caJf42RHkS3GgaBlU_cUAQ&s=10';
}

function App(){
  return (
    <>
      <h1> Nestore </h1>
      <MyButton/>
      <h2> {user.name} </h2>
      <div> a {user.age} </div>
      <img src={user.imageUrl} alt={'Photo de ' + user.name}></img>
    </>
  )
}

export default App