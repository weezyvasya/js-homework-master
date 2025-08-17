class Api {
  async get(url, options = {}, callback) {
     try {
       const res =  await fetch(url, options)

       if (!res.ok) {
        throw new Error('Что то не так с запросом!')
       }
       const data = await res.json()
      if(callback) {
        callback(data)
      } else {
        return data
      }
      
       
     } catch (e) {
        console.log(e)
     }
    
 }
  async post(url, options) {
    try {
       const res =  await fetch(url, {method: 'POST', ...options})

       if (!res.ok) {
        throw new Error('Что то не так с запросом!')
       }
       const data = await res.json()
       return data
      
       
     } catch (e) {
        console.log(e)
     } finally {
         console.log('finally')
     }
  }
  
  async delete(url, options = {}) {
    try {
      const res = await fetch(url, { method: 'DELETE', ...options });

      if (!res.ok) {
        throw new Error('Что то не так с запросом!');
      }
      const data = await res.json();
      return data;

    } catch (e) {
      console.log(e);
    } finally {
      console.log('finally');
    }
  }

  async put(url, options = {}) {
    try {
      const res = await fetch(url, { method: 'PUT', ...options });

      if (!res.ok) {
        throw new Error('Что то не так с запросом!');
      }
      const data = await res.json();
      return data;

    } catch (e) {
      console.log(e);
    } finally {
      console.log('finally');
    }
  }
}
export default  Api 