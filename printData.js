import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const PrintTable = () => {

    const contentPDF = useRef();

    const data = [
        { name: "Anom", age: 19, gender: "Male" },
        { name: "Megha", age: 19, gender: "Female" },
        { name: "Subham", age: 25, gender: "Male" },
    ]

    const generatePdf=useReactToPrint({
        content: ()=>contentPDF.current,
        documentTitle: "Customerdata",
        onAfterPrint:()=>alert("Data saved in PDF")
    })

    return (
        <div className="prnTbl">
            <div ref={contentPDF}>

                <h2>Customer detail
                <button onClick={generatePdf}>Print</button>
                </h2>

                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>

                    {data.map((item) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.gender}</td>
                        </tr>
                    ))}

                   
                </table >
            </div>
        </div >
    )
}

export default PrintTable;
