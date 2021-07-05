import React from "react";
import "./estilo.css";
import api from '../../api'


function FormularioCalculo(){
  const [data, setData] = React.useState({
    
  });
  
  async function submit (e){
      e.preventDefault();
      const {Salario,Desconto,Dependente} = e.target
      console.log(Salario.value)
      const dados ={
        salarioBruto: Salario.value,
        desconto: Desconto.value,
        dependente: Dependente.value
      }
      console.log("formulario",dados)

      try {
        const  res = await api.post('/calcular',dados)
        console.log("apiRes",res)
        setData(res.data)  
      } catch(error){
          console.log(error)
      }   
  }   
    return (
      <main className="mn">
        <div className="mn-block">
          <form className="mn-form"
            onSubmit={submit}
          >
            <p className="mn-form-p">Insira o salário bruto</p>
            <input type="text" placeholder="Salario" name="Salario" className="mn-form-item"
            />
            <p className="mn-form-p">Insira o desconto</p>
            <input type="text" placeholder="Desconto" name="Desconto" className="mn-form-item"
            />
            <p className="mn-form-p">Insira o numero de dependentes</p>
            <input type="text" placeholder="Dependente" name="Dependente" className="mn-form-item"
            />
            <button type="submit" className="mn-form-button">
              Calcular
            </button>
          </form>
        </div>
        <div className="mn-block">
          <div className="mn-result">
            <ul className="list">
                <li className="mn-result-item">Desconto INSS:</li>
                <li className="mn-result-item">Desconto IRPF:</li>
                <li className="mn-result-item">Outros Descontos:</li>
                <hr className="line"></hr>
                <li className="mn-result-item">Salario Líquido:</li>
            </ul>
            <ul className="list">
                <li className="mn-result-item">R${data.inss}</li>
                <li className="mn-result-item">R${data.irpf}</li>
                <li className="mn-result-item">R${data.desconto}</li>
                <hr className="line"></hr>
                <li className="mn-result-item">R${data.salarioLiquido}</li>
            </ul>
          </div>
        </div>
      </main>
    );
}
export default FormularioCalculo;
