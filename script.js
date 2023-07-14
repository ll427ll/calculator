var calculator = {
    num: 0,
    symbol: '',
    history: [],
    
    btn_click: function(a) {
      document.getElementById("resultFld").value += a;
    },
    
    cal: function(b) {
      var firstNum = document.getElementById("resultFld").value;
      this.num = firstNum;
      this.symbol = b;
      document.getElementById("resultFld").value = "";
    },
    
    compute: function() {
      var secNum = parseFloat(document.getElementById("resultFld").value);
      var result;
      
      switch (this.symbol) {
        case '+':
          result = Number(this.num) + Number(secNum);
          break;
        case '-':
          result = Number(this.num) - Number(secNum);
          break;
        case '*':
          result = Number(this.num) * Number(secNum);
          break;
        case '/':
          result = Number(this.num) / Number(secNum);
          break;
      }
      
      document.getElementById("resultFld").value = result;
      this.history.push(this.num + ' ' + this.symbol + ' ' + secNum + ' = ' + result);
    },
    
    clear_del: function() {
      document.getElementById("resultFld").value = "";
      this.num = 0;
    },
    
    getHistory: function() {
      return this.history;
    }
  };