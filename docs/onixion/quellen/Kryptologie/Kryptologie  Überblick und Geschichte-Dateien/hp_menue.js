/*====================================================================*/
/* File  hp_menue.js                                                  */
/* Stand 12.02.2003                                                   */
/*====================================================================*/

/*--------------------------------------------------------------------*/
/* Globale Variable                                                   */
/*--------------------------------------------------------------------*/
var nummer  = 0;     // Label-Nr. fuer Sprung nach oben
var img_o   = '';    // Pfeil-image aktiv
var img_n   = '';    // Pfeil-image inaktiv
var name = '';       // Teilnehmername fuer Mail
var domain = '';     // Domain-Name fuer Mail
var alt_top = '';    // Alternativ-Text für Sprung nach oben
var img_nr  = 0;     // Zaehler fuer Bild-Referenzen

/*--------------------------------------------------------------------*/
/* Initialisiere globale Variable                                     */
/* Stand 08.01.2003                                                   */
/*--------------------------------------------------------------------*/
function init_page(level)
  {
  nummer = 0;
  if (0==level)
    {
    img_o ='../pictures/std/gotop2.gif'; 
    img_n ='../pictures/std/gotop1.gif';
    }
  else
    {
    img_o ='../../pictures/std/gotop2.gif'; 
    img_n ='../../pictures/std/gotop1.gif';
    }
  name = 'hp';
  domain = 'hp-gramatke.de';
  alt_top = 'nach oben';
  img_nr = 1000;
  } // END init_page

/*--------------------------------------------------------------------*/
/* Erzeuge Ruecksprungpfeil mit Mouseovereffekt und automatischer     */
/* Generierung der lokalen IMG-Variablen                              */
/* Stand 16.12.2002                                                   */
/*--------------------------------------------------------------------*/
function go_top()
  {
  var jmp_no = 'top_';
  nummer++;
  jmp_no += String(nummer);
  document.write(
    '<A HREF=\"#top_of_page\" OnMouseOver=\"img:' + jmp_no + '.src=\'' + img_o +'\';\"' +
    'OnMouseOut=\"img:' + jmp_no + '.src=\'' + img_n + '\';\">' + 
    '<IMG NAME=\"' + jmp_no + '\" WIDTH=\"24\" HEIGHT=\"32\" ' +
    'BORDER=\"0\" ALT=\"" + alt_top + "\" SRC=\"' + img_n + '\"></A>');
  } // END go_top()


/*--------------------------------------------------------------------*/
/* Zeige Lexikoneintrag in separatem Fenster fester Groesse           */
/* Stand 20.01.2003                                                   */
/*--------------------------------------------------------------------*/
function ShowItem(filenam)
  {
   LexFenster =
   window.open("../../lexikon/" + filenam, "LexFenster", 
     "scrollbars=yes,width=600,height=200,hotkeys=no");
   LexFenster.focus();
  }  // END ShowItem()

/*--------------------------------------------------------------------*/
/* Zeige Text in separatem Fenster einstellbarer Groesse              */
/* Stand 20.01.2003                                                   */
/*--------------------------------------------------------------------*/
function ShowText(filenam, _w, _h)
  {
   LexFenster =
   window.open(filenam, "LexFenster", 
     "scrollbars=yes,width=" + _w + "height=" + _h + ",hotkeys=no");
   LexFenster.focus();
  }  // END ShowText()

/*--------------------------------------------------------------------*/
/* Zeige Maileintrag mit Subject und freien Bezug                     */
/* Stand 03.06.2002                                                   */
/*--------------------------------------------------------------------*/
function ShowMail(subject,mail_text)
  {
  if('' == mail_text)
    {
    document.write('<A HREF=\"mailto:' + name + '@' + domain + 
      '?subject=' + subject + '\">' +
      name + '@' + domain + '</A>');
    }
  else
    {
    document.write('<A HREF=\"mailto:' + name + '@' + domain + 
      '?subject=' + subject + '\">' +
      mail_text + '</A>');
    }
  }  // END ShowMail()

/*--------------------------------------------------------------------*/
/* Zeige Maileintrag mit Subject und freien Bezug (fuer Menuepunkt)   */
/* Stand 03.06.2002                                                   */
/*--------------------------------------------------------------------*/
function Show_M_Mail(subject,mail_text)
  {
  if('' == mail_text)
    {
    document.write('<A class=\"m\" HREF=\"mailto:' + name + '@' + domain + 
      '?subject=' + subject + '\">&nbsp;' +
      name + '@' + domain + '&nbsp;</A>');
    }
  else
    {
    document.write('<A class=\"m\" HREF=\"mailto:' + name + '@' + domain + 
      '?subject=' + subject + '\">&nbsp;' +
      mail_text + '&nbsp;</A>');
    }
  }  // END Show_M_Mail()

/*--------------------------------------------------------------------*/
/* Sprung auf eine URL des Subnetzes mit 3 Frames                     */
/* Stand 16.12.2002                                                   */
/*--------------------------------------------------------------------*/
function three_frames(URI1,F1,URI2,F2,URI3,F3)
{
Frame1 = eval("parent." + F1);
Frame2 = eval("parent." + F2);
Frame3 = eval("parent." + F3);
Frame1.location.href= URI1;
Frame2.location.href= URI2;
Frame3.location.href= URI3;
}


/*--------------------------------------------------------------------*/
/* Tastenaggregat fuer Ein-/ausschalten                               */
/* Stand 26.01.2003                                                   */
/*--------------------------------------------------------------------*/
function push_button(_anchor, _image_name, _ani, _static)
{
img_nr++;
document.write("<TABLE BORDER=\"0\" CELLSPACING=\"0\" CELLPADDING=\"0\">\n");
document.write("<TR><TD><A HREF=\"#" + _anchor + "\"" + 
  "OnMouseOver=\"img:sw_on" + img_nr + ".src=\'../../pictures/std/on_1.gif\';\" " +
  "OnMouseOut=\"img:sw_on" + img_nr + ".src=\'../../pictures/std/on_0.gif\';\" " +
  "ONCLICK=\"javascript:document." + _image_name + 
    ".src=\'../../pictures/perpet/" + _ani + "\'\">" + 
    "<IMG NAME=\"sw_on" + img_nr + "\" SRC=\"../../pictures/std/on_0.gif\""+
    " WIDTH=\"47\" HEIGHT=\"32\" BORDER=\"0\" ALT=\"einschalten\"></A></TD></TR>\n");
document.write("<TR><TD><A HREF=\"#" + _anchor + "\"" +
  "OnMouseOver=\"img:sw_off" + img_nr + ".src=\'../../pictures/std/off_1.gif\';\" " +
  "OnMouseOut=\"img:sw_off" + img_nr + ".src=\'../../pictures/std/off_0.gif\';\" " +
  "ONCLICK=\"javascript:document." + _image_name + 
    ".src=\'../../pictures/perpet/" + _static + "\'\">" +
    "<IMG NAME=\"sw_off" + img_nr + "\" SRC=\"../../pictures/std/off_0.gif\"" +
    " WIDTH=\"47\" HEIGHT=\"32\" BORDER=\"0\" ALT=\"ausschalten\"></A></TD></TR>\n");
document.write("</TABLE>\n");
} // END push_button()


/**********************************************************************/
/* Funktion:  formula_start()                                         */
/* Stand:     11.09.2003                                              */
/* Parameter:                                                         */
/*            _border        Rahmenbreite des Formelkastens           */
/*            _bordercoloer  Farbe des Rahmens                        */
/**********************************************************************/
function formula_start(_border, _bordercolor)
{
document.write("<TABLE BORDER=\"0\" CELLSPACING=\"0\" " +
  "CELLPADDING=\"" + _border + "\" BGCOLOR=\"" + _bordercolor + "\">\n" +
  "  <TR>\n    <TD><TABLE BORDER=\"0\" CELLSPACING=\"0\"" +
  " CELLPADDING=\"4\" BGCOLOR=\"#dfdfdf\">\n"+
  "	<TR>\n	  <TD>\n");
} // End formula_start()


/**********************************************************************/
/* Funktion:  formula_end()                                           */
/* Stand:     12.04.2004                                              */
/* Parameter: -                                                       */
/**********************************************************************/
function formula_end()
{
document.write("</TD></TR>\n      </TABLE>\n    </TD></TR>\n</TABLE>\n");
} // End formula_end()


// --- EOF hp_menue.js

