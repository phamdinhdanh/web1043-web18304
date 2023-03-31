
		function appendToDisplay(char) {
			document.getElementById("display").value += char;
		}
		function clearDisplay() {
			document.getElementById("display").value = "";
		}
		function evaluateExpression() {
			var hienthi = document.getElementById("display").value;
			var ketqua = eval(hienthi);
			document.getElementById("display").value = ketqua;
		}
	