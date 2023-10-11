

export default function Date({dateString}) {
 var mydate = new Date(dateString);

  return <time dateTime={mydate}>{mydate}</time>;
}