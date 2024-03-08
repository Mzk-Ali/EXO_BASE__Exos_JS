divCarre = document.getElementById("carre");
divCarre.style.background = "yellow";
divCarre.style.color = "black"
divCarre.style.height = "200px";
divCarre.style.width = "200px";
divCarre.style.fontSize = "60px";
divCarre.style.fontFamily = "Times New Roman";

console.log(divCarre);

divCarre.addEventListener("click", function(){alert("Class : "+ (divCarre.id) +
                                                    "\nBackground color : "+ divCarre.style.background +
                                                    "\ncolor : "+ divCarre.style.color +
                                                    "\nHeight : "+ divCarre.style.height +
                                                    "\nWidth : "+ divCarre.style.width +
                                                    "\nDisplay : "+ getComputedStyle(divCarre).display +
                                                    "\nFont : "+ divCarre.style.fontFamily + " (" + divCarre.style.fontSize + ")"
                                                    )});
