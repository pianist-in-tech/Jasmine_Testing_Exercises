
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount:50000,
    years:30,
    rate:3.8
  }
  expect(calculateMonthlyPayment(values)).toEqual('232.98');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount:50000,
    years:30,
    rate:3.8
  }
  expect(calculateMonthlyPayment(values)).toEqual('232.98');
});

/// etc
