
<html>
	<head>
	<title>::: O Objeto Date :::</title>
		<script>
			function formataData(data = new Date()) {
				var d_sem = data.getDay(); // Retorna o dia da semana (0 a 6)
				var dia = data.getDate(); // Retorna o dia do mês (1 a 31)
				var m = data.getMonth(); // Retorna o mes (0 a 11)
				var ano = data.getFullYear(); // Retorna o ano (aaaa)

				var dia_sem, mes;

				// tratar o dia da semana
				if (d_sem == 0)  dia_sem = "Domingo";
				else if (d_sem == 1) dia_sem = "Segunda-Feira";
				else if (d_sem == 2) dia_sem = "Terça-Feira";
				else if (d_sem == 3) dia_sem = "Quarta-Feira";
				else if (d_sem == 4) dia_sem = "Quinta-Feira";
				else if (d_sem == 5) dia_sem = "Sexta-Feira";
				else if (d_sem == 6) dia_sem = "Sábado";
			
				// tratar o mes
				if (m == 0) mes = "Janeiro";
				else if (m==1) mes = "Fevereiro";
				else if (m==2) mes = "Março";
				else if (m==3) mes = "Abril";
				else if (m==4) mes = "Maio";
				else if (m==5) mes = "Junho";
				else if (m==6) mes = "Julho";
				else if (m==7) mes = "Agosto";
				else if (m==8) mes = "Setembro";
				else if (m==9) mes = "Outubro";
				else if (m==10) mes = "Novembro";
				else if (m==11) mes = "Dezembro";
				return dia_sem+", "+dia+" de "+mes+" de "+ano;
			}
			console.log(formataData())
		</script>
	</head>

	<body >
	</body>
</html>
