var cesar =
  cesar ||
  (function () {
    var doStaff = function (txt, desp, action) {
      var replace = (function () {
        var abecedario = [
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
        ];
        var l = abecedario.length;
        return function (c) {
          var i = abecedario.indexOf(c.toLowerCase());
          if (i != -1) {
            var pos = i;
            if (action) {
              // adelante
              pos += desp;
              pos -= pos >= l ? l : 0;
            } else {
              // hacia atras
              pos -= desp;
              pos += pos < 0 ? l : 0;
            }
            return abecedario[pos];
          }
          return c;
        };
      })();
      var re = /([a-z])/gi;
      return String(txt).replace(re, function (match) {
        return replace(match);
      });
    };

    return {
      encode: function (txt, desp) {
        return doStaff(txt, desp, true);
      },
      decode: function (txt, desp) {
        return doStaff(txt, desp, false);
      },
    };
  })();

function codificar() {
  document.getElementById("resultado").innerHTML = cesar.encode(
    document.getElementById("cadena").value,
    3
  );
}
function decodificar() {
  document.getElementById("resultado").innerHTML = cesar.decode(
    document.getElementById("cadena").value,
    3
  );
}
