export function drawStatusText(context, input, player){
    context.font = '30px Helvetica';
    context.fillText('Last input: ' + input.lastKey, 10, 30);
    context.fillText('Active state: ' + player.currentState.state,10, 65);
}