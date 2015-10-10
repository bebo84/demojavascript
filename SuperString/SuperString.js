/**
 * Created by PHUONG on 10/10/2015.
 */

var String = require('./StringExtend.js');


module.exports =
{
    camelcase: function(string)
    {
       return string.camelcase();
    },
    invert: function(string)
    {
        return string.reverse();
    },
    longestWord: function(string)
    {
        var long = "";
        var tmp = "";
        for (var i = 0; i < string.length; i ++)
        {

            if (string.charAt(i) != ' ')
            {
                tmp += string.charAt(i);
                //console.log(tmp);
            }
            else
            {
                if (tmp.length > long.length)
                {
                    long = tmp;
                }
                tmp = '';
            }

        }
        return long;

    }
}


