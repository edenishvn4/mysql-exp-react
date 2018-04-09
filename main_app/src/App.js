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
        var gold = item.blood_type;
        var grp = item.group_name;
        var img = item.pict_link
        return <div className="col-xs-12 col-lg-4"><div className="panel panel-primary"><div className="panel-heading"><h4><b>{nama}</b></h4></div><div className="panel-body"><div className="col-lg-4"><img src={img} className="img-thumbnail" alt="ok"/></div><div className="col-lg-8"><h2>Facts:</h2><p>Tanggal Lahir :{tgl}</p><p>Usia :{usia}</p><p>Golongan darah :{gold}</p><p>Grup :{grp}</p></div></div></div></div>
      })
      return(
        <div className="container">
        <center>
          <div className="col-md-8 col-xs-8">
          <input type="text" className="form-control" ref="nama" id="exampleInputName" onChange={()=>{this.inp2();}} placeholder="Name"/>
          </div>
          <button type="submit" className="btn btn-primary col-md-4 col-xs-4" onClick={()=>{this.klik();}}>Get data</button>
          <br/><br/>
            {data}
            </center>
        </div>
      )
  }
}

export default App;
