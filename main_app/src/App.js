import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
        nm:"",
        dataMember:[]
    }
  }
  inp2(){
    this.setState({nm:this.refs.nama.value})
  }
  klik(){
    var nm1 = this.state.nm
    axios.get('http://localhost:4648/data/'+nm1).then((ambilData) => {
      console.log(ambilData);
      console.log(nm1);
      this.setState({
          dataMember: ambilData.data,
      });
    });
  }
//   hapus(){
//       var idx= this.refs.del;
//       axios.delete('http://localhost:3002/api/'+idx);
//   }
  render(){
    const data = this.state.dataMember.map((item, index) => {
        var nama = item.nam;
        var usia = item.age;
        var tgl = item.birthdate;
        return <tr><td key={index}>{nama}</td><td key={index}>{usia}</td><td key={index}>{tgl}</td><td key={index}><button type="submit" ref="del" className="btn btn-danger" onClick={()=>{this.hapus();}}>Delete</button></td></tr>;
      })
      return(
        <div className="container">
          <input type="text" className="form-control" ref="nama" id="exampleInputName" onChange={()=>{this.inp2();}} placeholder="Name"/>     
          <button type="submit" className="btn btn-primary" onClick={()=>{this.klik();}}>Get data</button>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Nama</th>
                        <th scope="col">Usia</th>
                        <th scope="col">tgl</th>
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>
            
           </div>
      )
  }
}

export default App;
