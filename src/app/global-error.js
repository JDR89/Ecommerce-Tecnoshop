"use client"



 const GlobalError = () => {
  return (
    <html>
    <body>
        <h2 className="text-5xl">Algo salió mal</h2>
        <button className="btn" onClick={() => reset()}>Recargar</button>
    </body>

</html>
  )
}

export default GlobalError