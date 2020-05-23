export function observe(receive) {
  
  //setInterval(() => receive([String.fromCharCode(64 + Math.floor(Math.random() * 8)+1), 
	//(Math.floor(Math.random() * 7.5 ) ) + 1 ]), 800);

	receive([String.fromCharCode(64 + Math.floor(Math.random() * 8)+1), (Math.floor(Math.random() * 7.5 ) ) + 1 ])

}