//var sampleText ='Lorem Ipsum is dummy text of the printing industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.';

function printPDF() {

	var form = document.createElement('form');
	form.setAttribute("target", "_blank");
	document.body.appendChild(form);
	form.method = 'post';
	form.action = "https://" + location.hostname+"/cicdreport";
	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "b0";
	input1.value = localStorage.getItem("b0");
	form.appendChild(input1);
	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "b1";
	input1.value = localStorage.getItem("b1");
	form.appendChild(input1);
	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "b2";
	input1.value = localStorage.getItem("b2");
	form.appendChild(input1);
	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "b3";
	input1.value = localStorage.getItem("b3");
	form.appendChild(input1);
	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "b4";
	input1.value = localStorage.getItem("b4");
	form.appendChild(input1);
	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "b5";
	input1.value = localStorage.getItem("b5");
	form.appendChild(input1);
	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "b6";
	input1.value = localStorage.getItem("b6");
	form.appendChild(input1);
	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "b7";
	input1.value = localStorage.getItem("b7");
	form.appendChild(input1);
	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "e0";
	input1.value = localStorage.getItem("e0");
	form.appendChild(input1);
	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "e1";
	input1.value = localStorage.getItem("e1");
	form.appendChild(input1);
	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "e2";
	input1.value = localStorage.getItem("e2");
	form.appendChild(input1);
	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "e3";
	input1.value = localStorage.getItem("e3");
	form.appendChild(input1);
	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "e4";
	input1.value = localStorage.getItem("e4");
	form.appendChild(input1);
	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "r0";
	input1.value = localStorage.getItem("r0");
	form.appendChild(input1);
	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "r1";
	input1.value = localStorage.getItem("r1");
	form.appendChild(input1);
	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "r2";
	input1.value = localStorage.getItem("r2");
	form.appendChild(input1);
	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "r3";
	input1.value = localStorage.getItem("r3");
	form.appendChild(input1);
	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "r4";
	input1.value = localStorage.getItem("r4");
	form.appendChild(input1);
	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "t0";
	input1.value = localStorage.getItem("t0");
	form.appendChild(input1);

	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "t1";
	input1.value = localStorage.getItem("t1");
	form.appendChild(input1);
	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "t2";
	input1.value = localStorage.getItem("t2");
	form.appendChild(input1);
	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "t3";
	input1.value = localStorage.getItem("t3");
	form.appendChild(input1);
	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "t4";
	input1.value = localStorage.getItem("t4");
	form.appendChild(input1);
	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "t5";
	input1.value = localStorage.getItem("t5");
	form.appendChild(input1);
	form.submit();

}