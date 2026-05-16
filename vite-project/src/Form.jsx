export default function Form (){
    async function handleSubmit(event) {
    event.preventDefault(); 

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Sent successfully!");
        console.log(document.getElementById(message).textContent)
        document.getElementById(name).textContent=""
      }

    } catch (error) {
      console.error("Error sending data:", error);
    }
  }
    return (<> 
    
    <form id="form" onSubmit={handleSubmit}>
        <label >Name</label>
        <input  required name="Name" id="name" type="text"></input>
         <label >Mesage</label>
        <textarea   required name="Message" id="message" minLength={10} ></textarea>
        <button type="submit">Submit</button>
    </form>
    
    

    </>)

}