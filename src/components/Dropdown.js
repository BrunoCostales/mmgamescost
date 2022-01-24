import React from 'react';
import '../App.css'

function Dropdown() {
  return (<nav>
    <menu>
      <menuitem id="demo1">
        <a>Categorias</a>
        <menu>
          <menuitem><a>Accion</a></menuitem>
              {/*  <menuitem>
                  <a>settings</a>
                  <menu>
                     <menuitem><a>Test 1</a></menuitem>
                     <menuitem><a>Test 2</a></menuitem>
                     <menuitem><a>Test 3</a></menuitem>
                     <menuitem><a>Test 4</a></menuitem>
                  </menu>  
               </menuitem> */}
          <menuitem><a>Aventura</a></menuitem>
          <menuitem><a>deep 1</a></menuitem>
                  <menuitem><a>deep 2</a></menuitem>
                  <menuitem><a>deep 3</a></menuitem>
              <menuitem><a>test</a></menuitem>
            </menu>
          
       
      </menuitem>
        
    </menu>
  </nav>
  )
      
}

export default Dropdown;
