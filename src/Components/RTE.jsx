import React from "react";
import { Controller } from "react-hook-form";
import ReactQuill from "react-quill";

import "../../node_modules/react-quill/dist/quill.snow.css";

function RTE({ name, control, label, error, defaultValue = "" }) {
  const modules = {
    toolbar:[
    ['bold', 'italic', 'underline', 'strike'],        
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],
  
    [{ 'header': 1 }, { 'header': 2 }],              
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      
    [{ 'indent': '-1'}, { 'indent': '+1' }],          
    [{ 'direction': 'rtl' }],                         
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                     
  ]}
  return (
    <div className="mb-15">
      {label && <label className="inline-flex mb-1 pl-1">{label}</label>}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field }) => (
          <ReactQuill style ={{height:"400px" }} defaultValue ={defaultValue} value={field.value} theme="snow" modules={modules}  onChange={field.onChange}/>
        )}
        
      />

    </div>
  );
}

export default RTE;
