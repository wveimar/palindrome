import React from 'react'

const Palindrome = () => {
    const [stringPalindrome, setStringPalindrome] = React.useState()
    const [resultado, setResultado] = React.useState(null)
    
    const comparar = e =>{
        e.preventDefault()
        const rev = stringPalindrome.split("").reverse("").join("")
       if (stringPalindrome === rev){
       setResultado("Si es palindrome")
       }else{
       setResultado("No es palindrome")
       }
    }
    return (
        <div className="mt-5 text-center">
            <h3>Palabras Palindromes</h3>
              <hr />
            {
               resultado ?  <div class="alert alert-primary" role="alert">
                {resultado}
              </div> : null
            }
            <form onSubmit={comparar}>
            <input type="text" 
                placeholder="ingrese una palabra"
                onChange={e => setStringPalindrome(e.target.value)}/>
            <button className="btn btn-dark" type="submit">Comparar</button>
            </form>  
        </div>
    )
}

export default Palindrome
