function triangles(arr) {
  /* Здесь будет реализация функции, пока пусто */
}

function showInfo(status, reason) {
  return {
    status,
    reason,
  };
}

mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;

//тесты

describe("Triangles", function () {
  it("Function areaOfTriangles return ['ABC', 'ZXC', 'ASD']", function () {
    assert.equal(
      triangles([
        { vertices: "ABC", a: 10, b: 20, c: 22.36 },
        { vertices: "ZXC", z: 4.5, x: 11.79, c: 10.56 },
        { vertices: "ASD", a: 7.97, s: 3.61, d: 8 },
      ]),
      ["ABC", "ZXC", "ASD"]
    );
  });
  it("Function return  ['ABC', 'ZXC', 'ASD'] is an array", function () {
    assert.isArray(
      triangles([
        { vertices: "ABC", a: 10, b: 20, c: 22.36 },
        { vertices: "ZXC", z: 4.5, x: 11.79, c: 10.56 },
        { vertices: "ASD", a: 7.97, s: 3.61, d: 8 },
      ]),
      "Function triangles return array"
    );
  });

  it(`Failed  when all fields are empty`, function () {
    assert.deepEqual(triangles([{ vertices: "", a: "", b: "", c: "" }]), {
      status: "Failed",
      reason: "All fields are empty",
    });
  });
  it(`Failed when vertices name not passed!`, function () {
    assert.deepEqual(triangles([{ vertices: "", a: 10, b: 10, c: 19.55 }]), {
      status: "Failed",
      reason: "Vertex name not passed!",
    });
  });
  it(`Failed when vertices name not a 3 letters!`, function () {
    assert.deepEqual(triangles([{ vertices: "R", a: 10, b: 10, c: 19.55 }]), {
      status: "Failed",
      reason: "The name of the vertices must be 3 letters.",
    });
  });
  it(`The name of the vertices cannot be more than three letters.`, function () {
    assert.deepEqual(
      triangles([{ vertices: "RTYU", a: 10, b: 10, c: 19.55 }]),
      {
        status: "Failed",
        reason: "The name of the vertices cannot be more than three letters.",
      }
    );
  });
  it(`Failed when one side of the triangle is greater than the sum of the other two!`, function () {
    assert.deepEqual(triangles([{ vertices: "REW", a: 10, b: 45, c: 19.55 }]), {
      status: "Failed",
      reason:
        "One side of the triangle is greater than the sum of the other two",
    });
  });
});

mocha.run();
