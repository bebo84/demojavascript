/**
 * Created by TranPhuong on 10/10/15.
 */
String.prototype.reverse = function(){
    var result = "";
    for (var i = this.length-1; i >= 0; i --){
        result += this.charAt(i);
    }
    return result;
};

String.prototype.camelcase = function()
{
    var result ="";
    var prevchar = undefined;
    for (var i = 0; i < this.length; i ++)
    {
        var currentChar = this.charAt(i);
        if (i == 0 || prevchar == " ")
        {
            result += currentChar.toUpperCase();
        }
        else
        {
            result += currentChar;
        }
        prevchar = currentChar;
    }
    return result;
};

module.exports = String;