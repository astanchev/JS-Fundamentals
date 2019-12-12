function chessBoard(number) {
    let outputArr = [];
    outputArr.push('<div class="chessboard">');

    for (let i = 1; i <= number; i++) {
        outputArr.push('  <div>');

        for (let j = 1; j <= number; j++) {
            let color = '';
            
            if (i % 2 === 1) {
                color = j % 2 === 1 ? 'black' : 'white';

            } else if (i % 2 === 0) {
                color = j % 2 === 0 ? 'black' : 'white';
            }

            outputArr.push(`    <span class="${color}"></span>`);
        }

        outputArr.push('  </div>');
    }

    outputArr.push('</div>');
    console.log(outputArr.join('\n'));
}

chessBoard(3);