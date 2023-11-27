import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
const GuestIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 0 400 400"
    {...props}
  >
    <G fillRule="evenodd">
      <Path
        fill="#bcbcbc"
        d="M196.601 42.54c-.6.446-1.524.546-3.726.4-1.941-.129-3.121-.033-3.501.282-.316.262-.574.342-.574.178 0-.164-.225-.124-.5.088-.275.213-1.265.331-2.2.264-.935-.068-1.7.05-1.7.262 0 .213-.615.386-1.367.386-.751 0-1.436.208-1.521.463-.085.255-.771.446-1.524.424-.754-.021-1.465.112-1.579.296-.115.184-.659.398-1.209.476-.55.077-1.222.35-1.493.605-.271.256-.856.37-1.3.254-.454-.119-.807-.016-.807.235 0 .246-.36.447-.8.447-.44 0-.8.18-.8.4 0 .22-.461.4-1.024.4-.58 0-.916.173-.776.4.14.227-.196.4-.776.4-.563 0-1.024.18-1.024.4 0 .22-.36.4-.8.4-.44 0-.8.18-.8.4 0 .22-.36.4-.8.4-.44 0-.8.152-.8.337 0 .186-.855.769-1.9 1.298-1.045.528-2.138 1.186-2.429 1.463-.29.276-.785.502-1.1.502-.314 0-.571.159-.571.353 0 .195-.378.453-.84.573-.462.121-.723.41-.579.642.164.266.005.325-.43.158-.535-.205-.63-.11-.425.425.164.427.107.593-.148.435-.515-.318-1.93.593-3.753 2.415-.769.77-1.595 1.399-1.835 1.399-.241 0-.326.18-.19.4.136.22-.057.4-.429.4-.676 0-2.171 1.42-2.171 2.061 0 .187-.281.339-.624.339-.343 0-.532.147-.421.327.111.18-.139.573-.555.873-.416.3-.652.716-.523.925.129.208-.016.294-.321.19-.676-.231-2.04 1.225-1.686 1.798.146.236.057.289-.208.125-.277-.171-.462-.025-.462.362 0 .356-.18.536-.4.4-.22-.136-.4-.039-.4.216s-.554.98-1.23 1.612c-.677.633-1.114 1.339-.971 1.571.143.231.03.371-.251.311-.281-.061-.52.1-.53.356-.01.257-.378.797-.818 1.2-.44.404-.859 1.002-.932 1.33-.073.328-.254.688-.404.8-.483.363-2.464 3.574-2.464 3.995 0 .225-.18.409-.4.409-.22 0-.4.234-.4.52 0 .736-.941 2.673-1.3 2.677-.165.002-.3.363-.3.803 0 .44-.18.8-.4.8-.22 0-.4.234-.4.52 0 .736-.941 2.673-1.3 2.677-.165.002-.3.442-.3.979 0 .537-.18 1.088-.4 1.224-.22.136-.4.787-.4 1.447 0 .698-.167 1.097-.4.953-.231-.143-.4.236-.4.896 0 .629-.174 1.318-.387 1.531-.212.212-.43.968-.485 1.68-.054.711-.26 1.293-.457 1.293s-.287.61-.2 1.355c.115.984.017 1.3-.357 1.157-.377-.145-.514.34-.514 1.822 0 1.11-.18 2.13-.4 2.266-.22.136-.4 1.486-.4 3s-.169 2.857-.376 2.985c-.519.321-.544 13.694-.027 14.013.222.137.403 1.578.403 3.202 0 1.624.18 3.064.4 3.2.22.136.4 1.047.4 2.024 0 .977.18 1.776.4 1.776.22 0 .4.72.4 1.6 0 .88.18 1.6.4 1.6.22 0 .4.54.4 1.2 0 .66.18 1.2.4 1.2.22 0 .4.63.4 1.4 0 .77.18 1.4.4 1.4.22 0 .4.461.4 1.024 0 .58.173.916.4.776.233-.144.4.263.4.976 0 .673.18 1.224.4 1.224.22 0 .4.36.4.8 0 .44.18.8.4.8.22 0 .4.36.4.8 0 .44.18.8.4.8.22 0 .4.36.4.8 0 .44.18.8.4.8.22 0 .4.36.4.8 0 .44.18.8.4.8.22 0 .4.36.4.8 0 .44.18.8.4.8.22 0 .4.341.4.757 0 .417.281.865.625.997s.514.422.377.643c-.137.222-.029.403.241.403s.379.111.243.248c-.304.303.693 1.352 1.285 1.352.236 0 .429.174.429.387 0 .214-.315.272-.7.13-.385-.142-.106.304.62.991s1.298 1.36 1.272 1.495c-.025.135.594.975 1.376 1.867.782.893 1.355 1.737 1.273 1.876-.082.14.558.884 1.423 1.654.864.77 2.148 1.987 2.854 2.704 4.356 4.432 5.675 5.696 5.945 5.696.167 0 1.06.72 1.985 1.6.925.88 1.805 1.6 1.955 1.6.15 0 .796.451 1.435 1.002.639.552 1.477 1.104 1.862 1.227.385.124.7.393.7.598 0 .205.36.373.8.373.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.45.4 1 .4s1 .18 1 .4c0 .22.33.4.733.4.404 0 .869.135 1.034.3.165.165.78.314 1.366.331.593.017 1.023.239.967.5-.063.296.481.469 1.476.469.867 0 1.671.152 1.786.339.115.186.783.355 1.485.375.701.02 1.382.192 1.514.383.131.192.876.386 1.656.432.779.047 1.859.192 2.4.323 2.247.544 5.428.704 13.383.673 10.592-.042 11.201-.075 13.465-.725 1.026-.295 1.954-.447 2.063-.339.109.109.709-.051 1.335-.356.625-.305 1.587-.519 2.137-.477.55.043 1.117-.108 1.26-.334.143-.227.773-.431 1.4-.453.627-.023 1.104-.24 1.059-.484-.045-.248.351-.395.898-.335.539.059 1.081-.057 1.205-.257.124-.201.755-.365 1.402-.365.647 0 1.176-.18 1.176-.4 0-.22.45-.4 1-.4s1-.18 1-.4c0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.278-.4.617-.4.339 0 1.003-.36 1.475-.8.472-.44 1.209-.8 1.637-.8.427 0 1.068-.329 1.424-.73.356-.402 1.219-.98 1.918-1.285.699-.305 1.184-.697 1.077-.87-.108-.173.063-.315.379-.315s.799-.27 1.073-.6c.274-.33.824-.6 1.222-.6s.838-.36.978-.8c.14-.44.493-.8.784-.8.292 0 .629-.256.749-.57.12-.313.86-.874 1.643-1.245.783-.372 1.424-.814 1.424-.983 0-.451 7.096-7.573 7.321-7.348.105.106.435-.358.733-1.031.298-.673.677-1.223.844-1.223.166 0 .302-.281.302-.624 0-.343.135-.541.3-.442.364.221 1.056-.547 1.217-1.35.064-.321.462-.877.883-1.234.421-.358.654-.763.516-.9-.137-.138-.029-.25.241-.25s.388-.165.263-.368c-.125-.202.044-.639.376-.971.332-.332.604-.797.604-1.032 0-.236.18-.429.4-.429.22 0 .4-.371.4-.824 0-.453.18-.712.4-.576.22.136.4-.123.4-.576 0-.453.18-.824.4-.824.22 0 .4-.27.4-.6 0-.33.18-.6.4-.6.22 0 .4-.36.4-.8 0-.44.18-.8.4-.8.22 0 .4-.36.4-.8 0-.44.18-.8.4-.8.22 0 .4-.36.4-.8 0-.44.18-.8.4-.8.22 0 .4-.36.4-.8 0-.44.18-.8.4-.8.22 0 .4-.273.4-.606 0-.97.966-3.794 1.297-3.794.167 0 .303-.504.303-1.12 0-.616.184-1.304.41-1.53.225-.225.434-1.064.464-1.863.03-.8.206-1.361.39-1.247.185.114.336-.333.336-.993 0-.66.185-1.314.411-1.453.225-.14.406-.826.401-1.524-.024-3.19.518-9.07.836-9.07.193 0 .352-2.88.352-6.4 0-3.52-.152-6.4-.339-6.4-.186 0-.456-2.196-.601-4.881-.144-2.685-.442-5.061-.661-5.28-.219-.219-.399-.993-.399-1.719 0-.726-.18-1.32-.4-1.32-.22 0-.4-.72-.4-1.6 0-.88-.18-1.6-.4-1.6-.22 0-.4-.54-.4-1.2 0-.66-.18-1.2-.4-1.2-.22 0-.4-.54-.4-1.2 0-.66-.135-1.201-.3-1.203-.406-.004-1.3-1.983-1.3-2.877 0-.396-.18-.72-.4-.72-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.371-.4-.824 0-.453-.18-.712-.4-.576-.22.136-.4-.033-.4-.376 0-.343-.18-.624-.4-.624-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.27-.4-.6 0-.33-.153-.6-.339-.6-.187 0-.665-.722-1.063-1.604-.398-.882-.812-1.515-.921-1.406-.269.269-1.248-1.062-1.264-1.719-.018-.746-.926-1.567-1.517-1.37-.329.11-.406-.07-.228-.533.183-.477.119-.607-.2-.41-.281.174-.468.04-.468-.334 0-.343-.18-.624-.4-.624-.22 0-.4-.341-.4-.757 0-.712-.998-1.46-1.73-1.297-.181.041-.215-.112-.074-.339.14-.227-.026-.695-.37-1.039-.345-.344-.626-.504-.626-.356 0 .148-1.048-.829-2.33-2.171-1.281-1.343-2.451-2.441-2.599-2.441-.149 0-1.012-.72-1.919-1.6-.907-.88-1.897-1.6-2.2-1.6-.304 0-.552-.191-.552-.424 0-.233-.18-.312-.4-.176-.22.136-.4.044-.4-.205 0-.546-.825-1.354-1.536-1.504-.284-.059-.898-.464-1.365-.9-.468-.435-.996-.813-1.174-.841-.179-.027-.46-.073-.625-.101-.165-.027-.868-.455-1.562-.95-.694-.494-1.459-.899-1.7-.899-.241 0-.438-.18-.438-.4 0-.22-.36-.4-.8-.4-.44 0-.8-.191-.8-.424 0-.233-.165-.321-.368-.196-.202.125-.648-.053-.991-.396-.343-.343-.942-.569-1.332-.504-.399.068-.665-.098-.609-.38.062-.311-.353-.5-1.1-.5-.66 0-1.2-.18-1.2-.4 0-.22-.324-.4-.72-.4-.894 0-2.873-.894-2.877-1.3-.002-.165-.622-.3-1.379-.3s-1.488-.18-1.624-.4c-.136-.22-.777-.4-1.424-.4-.647 0-1.176-.143-1.176-.318 0-.175-.67-.364-1.488-.419-.818-.055-1.594-.272-1.724-.483-.13-.21-.856-.326-1.612-.257-.757.069-1.77-.124-2.251-.428-.638-.404-1.796-.503-4.28-.365-2.36.131-3.452.048-3.558-.27-.251-.754-8.294-.858-9.286-.12m-9.053 191.001c-.097.283-2.396.449-6.648.48-3.62.027-6.5.21-6.5.414 0 .201-1.609.365-3.576.365s-3.688.18-3.824.4c-.136.22-1.576.4-3.2.4s-3.064.18-3.2.4c-.136.22-1.407.4-2.824.4-1.451 0-2.576.175-2.576.4 0 .222-1.067.4-2.4.4s-2.4.178-2.4.4c0 .22-.99.4-2.2.4-1.21 0-2.2.18-2.2.4 0 .22-.9.4-2 .4s-2 .18-2 .4c0 .22-.63.4-1.4.4-.85 0-1.402.196-1.406.5-.005.368-.097.357-.35-.043-.24-.378-.427-.408-.618-.1-.15.244-.893.443-1.65.443-.757 0-1.376.18-1.376.4 0 .22-.72.4-1.6.4-.919 0-1.6.192-1.6.45 0 .285-.433.363-1.185.213-.74-.148-1.384-.037-1.718.297-.294.294-1.111.489-1.816.434-.809-.064-1.281.082-1.281.397 0 .309-.362.429-.953.316-.524-.1-1.075.015-1.224.255-.148.241-.868.438-1.598.438-.73 0-1.549.268-1.821.596-.272.327-.635.508-.807.402-.172-.106-.96.078-1.753.409-.792.331-1.576.623-1.742.648-.616.095-1.522.414-2.197.774-.382.204-1.046.371-1.476.371-.43 0-.893.18-1.029.4-.136.22-.597.4-1.024.4-.427 0-.776.18-.776.4 0 .22-.54.4-1.2.4-.66 0-1.2.18-1.2.4 0 .22-.36.4-.8.4-.44 0-.8.18-.8.4 0 .22-.54.4-1.2.4-.66 0-1.2.18-1.2.4 0 .22-.36.4-.8.4-.44 0-.8.18-.8.4 0 .22-.45.4-1 .4s-1 .157-1 .35c0 .193-.518.454-1.152.58-.633.127-1.398.465-1.7.75-.301.286-.728.525-.948.531-.731.021-6.795 3.131-7.111 3.648-.17.279-.575.406-.9.282-.324-.125-.589-.027-.589.216 0 .244-.371.443-.824.443-.453 0-.712.18-.576.4.136.22-.033.4-.376.4-.343 0-.624.18-.624.4 0 .22-.371.4-.824.4-.453 0-.712.18-.576.4.136.22-.129.4-.589.4-.46 0-.939.269-1.065.598-.127.328-.391.498-.588.376-.197-.122-.358-.031-.358.202s-.236.424-.525.424c-.288 0-.911.36-1.383.8-.472.44-1.076.8-1.342.8s-.36.124-.209.275c.151.151-.446.604-1.326 1.008-.88.403-2.31 1.45-3.176 2.325-.867.876-1.761 1.592-1.988 1.592-.226 0-.595.315-.819.7-.224.385-.413.561-.42.391-.007-.17-.796.46-1.754 1.4s-1.649 1.889-1.536 2.109c.114.22.057.265-.125.099-.432-.391-1.797.847-1.797 1.63 0 .332-.115.49-.255.35s-1.222.775-2.404 2.033c-3.564 3.793-3.606 3.842-2.941 3.519.33-.161.195.066-.3.503s-.9 1.001-.9 1.254c0 .252-.18.348-.4.212-.22-.136-.4.057-.4.429 0 .373-.381 1.008-.847 1.412-.49.424-.749.994-.613 1.347.137.357.017.612-.288.612-.519 0-1.663 1.904-1.514 2.522.042.177-.197.712-.531 1.189-.334.477-.607 1.277-.607 1.778 0 .501-.18.911-.4.911-.22 0-.4.27-.4.6 0 .33-.18.6-.4.6-.22 0-.4.529-.4 1.176 0 .647-.18 1.288-.4 1.424-.22.136-.4.867-.4 1.624 0 .757-.18 1.376-.4 1.376-.233 0-.4 1.325-.4 3.176 0 1.747-.18 3.288-.4 3.424-.258.159-.4 7.271-.4 20.023v19.776l151.5-.1L351.4 347l.104-20.3c.068-13.458-.033-20.3-.3-20.3-.233 0-.404-1.183-.404-2.8 0-1.6-.171-2.8-.4-2.8-.22 0-.4-.72-.4-1.6 0-.88-.18-1.6-.4-1.6-.22 0-.4-.54-.4-1.2 0-.66-.18-1.2-.4-1.2-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.468-.4-1.04 0-1.241-.94-3.33-2.02-4.489-.429-.461-.78-1.115-.78-1.454 0-.339-.18-.617-.4-.617-.22 0-.4-.241-.4-.536 0-.295-.712-1.263-1.583-2.151-.87-.888-1.491-1.706-1.379-1.818.112-.111-2.211-2.649-5.161-5.639-2.95-2.99-5.479-5.32-5.62-5.179-.142.141-.257-.044-.257-.41 0-.59-.19-.711-1.016-.651-.119.008-.886-.681-1.704-1.533-.818-.851-1.735-1.465-2.039-1.363-.335.111-.442.006-.273-.268.157-.254.033-.452-.282-.452-.309 0-.888-.36-1.286-.8-.398-.44-.966-.8-1.262-.8-.296 0-.538-.191-.538-.424 0-.233-.161-.324-.358-.202-.197.122-.461-.048-.588-.376-.126-.329-.465-.598-.753-.598s-.784-.36-1.101-.8c-.317-.44-.897-.8-1.288-.8-.392 0-.712-.18-.712-.4 0-.22-.32-.4-.712-.4-.391 0-.971-.36-1.288-.8-.317-.44-.897-.8-1.288-.8-.392 0-.713-.135-.715-.3-.005-.432-2.045-1.318-2.453-1.065-.189.117-.344-.068-.344-.411 0-.385-.354-.624-.925-.624-.508 0-1.311-.36-1.783-.8-.472-.44-1.125-.8-1.452-.8-.326 0-.71-.19-.853-.421a.65.65 0 0 0-.72-.268c-.253.084-.708-.095-1.012-.399-.303-.303-1.07-.655-1.703-.782-.634-.126-1.155-.432-1.158-.68-.003-.247-.181-.18-.394.15-.258.4-.39.433-.394.1-.003-.275-.276-.5-.606-.5-.33 0-.6-.18-.6-.4 0-.22-.36-.4-.8-.4-.44 0-.8-.18-.8-.4 0-.22-.54-.4-1.2-.4-.66 0-1.2-.18-1.2-.4 0-.22-.36-.4-.8-.4-.44 0-.8-.18-.8-.4 0-.22-.54-.4-1.2-.4-.66 0-1.2-.18-1.2-.4 0-.22-.36-.4-.8-.4-.44 0-.8-.18-.8-.4 0-.22-.731-.4-1.624-.4-1.137 0-1.537-.14-1.334-.468.194-.313.073-.385-.366-.217-.401.154-.803-.012-1.035-.428-.21-.374-.507-.554-.662-.4-.154.155-.907.02-1.672-.3-.766-.32-1.565-.475-1.776-.344-.211.13-.656-.096-.987-.503-.332-.407-.474-.47-.315-.14.234.487.187.506-.25.1-.297-.275-.942-.5-1.435-.5-.493 0-1.019-.197-1.167-.438-.149-.24-.691-.357-1.204-.259-.538.103-.9-.005-.853-.255.046-.248-.52-.425-1.319-.412-.769.013-1.631-.209-1.915-.493-.318-.317-.974-.425-1.701-.28-.752.15-1.185.072-1.185-.213 0-.258-.681-.45-1.6-.45-.88 0-1.6-.18-1.6-.4 0-.22-.619-.4-1.376-.4-.757 0-1.5-.199-1.65-.443-.191-.308-.378-.278-.618.1-.253.4-.345.411-.35.043-.004-.304-.556-.5-1.406-.5-.77 0-1.4-.157-1.4-.349 0-.192-.853-.367-1.896-.388-1.042-.021-1.957-.223-2.033-.45-.076-.227-1.213-.413-2.528-.413-1.492 0-2.297-.15-2.143-.4.154-.25-.655-.4-2.153-.4-1.32 0-2.511-.18-2.647-.4-.136-.22-1.306-.4-2.6-.4s-2.447-.153-2.562-.339c-.115-.186-1.521-.376-3.124-.422-1.603-.045-2.974-.253-3.047-.461-.074-.208-1.829-.378-3.9-.378-2.072 0-3.767-.165-3.767-.367 0-.205-2.855-.387-6.485-.413-3.566-.025-6.581-.202-6.7-.393-.371-.596-24.014-.532-24.021.066-.005.38-.092.371-.352-.038-.217-.343-.4-.385-.494-.114"
      />
      <Path
        fill="#c0bcbc"
        d="M196.2 42.4c-.136.22-.642.421-1.124.446-.665.036-.709.091-.183.228.38.1 1.096-.101 1.589-.446.493-.345.687-.628.431-.628a.936.936 0 0 0-.713.4"
      />
      <Path
        fill="#c0bcbc"
        d="M196.2 42.4c-.136.22-.642.421-1.124.446-.665.036-.709.091-.183.228.38.1 1.096-.101 1.589-.446.493-.345.687-.628.431-.628a.936.936 0 0 0-.713.4"
      />
      <Path
        fill="#c0bcbc"
        d="M196.2 42.4c-.136.22-.642.421-1.124.446-.665.036-.709.091-.183.228.38.1 1.096-.101 1.589-.446.493-.345.687-.628.431-.628a.936.936 0 0 0-.713.4"
      />
      <Path
        fill="#c0bcbc"
        d="M196.2 42.4c-.136.22-.642.421-1.124.446-.665.036-.709.091-.183.228.38.1 1.096-.101 1.589-.446.493-.345.687-.628.431-.628a.936.936 0 0 0-.713.4"
      />
    </G>
  </Svg>
);
export default GuestIcon;