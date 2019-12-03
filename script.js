axios.get('https://api.coinlore.com/api/tickers/?start=1&limit=10').then((res) => {
    console.log(res.data);
    const data = res.data.data;
    // console.log(data)
    const tbody = data.map(value => {
         document.getElementById("first_batch").innerHTML += `
           <td class="black">${value.name}</td>
            <td class="black">${value.symbol}</td>
            <td class="black">${'$ ' + value.price_usd}</td>
            <td class="black">${value.tsupply + ' ' + value.symbol}</td>`  ;
                
        })
    }).catch((err) => {
        console.log(err)
})

axios.get('https://api.coinlore.com/api/tickers/?start=11&limit=10').then((res) => {
    console.log(res.data);
    const data = res.data.data;
    // console.log(data)
    const tbody = data.map(value => {
         document.getElementById("second_batch").innerHTML += `
           <td class="black">${value.name}</td>
            <td class="black">${value.symbol}</td>
            <td class="black">${'$ ' + value.price_usd}</td>
            <td class="black">${value.tsupply + ' ' + value.symbol}</td>`  ;
                
        })
    }).catch((err) => {
        console.log(err)
})
axios.get('https://api.coinlore.com/api/tickers/?start=21&limit=10').then((res) => {
    console.log(res.data);
    const data = res.data.data;
    // console.log(data)
    const tbody = data.map(value => {
         document.getElementById("third_batch").innerHTML += `
           <td class="black">${value.name}</td>
            <td class="black">${value.symbol}</td>
            <td class="black">${'$ ' + value.price_usd}</td>
            <td class="black">${value.tsupply + ' ' + value.symbol}</td>`  ;
                
        })
    }).catch((err) => {
        console.log(err)
})

    console.log('Im working!')