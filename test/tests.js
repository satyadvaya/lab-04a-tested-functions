const test = QUnit.test;

function add(x, y) {
    return x + y
}

test('add function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 4;
    const y = 3;
    const expected = 7;

    //Act 
    // Call the function you're testing and set the result to a const
    const sum = add(x, y);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(sum, expected);
});


function subtract(x, y) {
    return x - y
}

test('subtract function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 5;
    const y = 3;
    const expected = 2;

    //Act 
    // Call the function you're testing and set the result to a const
    const difference = subtract(x, y);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(difference, expected);
});


function multiply(x, y) {
    return x * y
}

test('multiply function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 4;
    const y = 3;
    const expected = 12;

    //Act 
    // Call the function you're testing and set the result to a const
    const product = multiply(x, y);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(product, expected);
});


function divide1(x, y) {
    return x / y
}

test('divide1 function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 6;
    const y = 2;
    const expected = 3;

    //Act 
    // Call the function you're testing and set the result to a const
    const difference = divide1(x, y);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(difference, expected);
});


function divide2(x, y) {
    return x / y
}

test('divide2 function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 7;
    const y = 0;
    const expected = Infinity;

    //Act 
    // Call the function you're testing and set the result to a const
    const difference = divide2(x, y);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(difference, expected);
});


function isEven1(x) {
    if (x % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

test('isEven1 function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 6;
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const oddOrEven = isEven1(x);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(oddOrEven, expected);
});

function isEven2(x) {
    if (x % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

test('isEven2 function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 7;
    const expected = false;

    //Act 
    // Call the function you're testing and set the result to a const
    const oddOrEven = isEven2(x);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(oddOrEven, expected);
});