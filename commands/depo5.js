module.exports = {
name: "$alwaysExecute",
code: `

$djseval[
a =  '$get[msg1]'
b = '$get[msg2]'

message.channel.send(a + b)
]
FIRST

$let[msg2;$message[3]]
$let[msg1;$message[2]]

$onlyif[$message[1]==depo5]
$onlyForIDs[1126715929062031453;]

`
}