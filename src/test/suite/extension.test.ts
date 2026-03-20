import * as assert from 'assert';
import { disposeAll, Disposable } from '../../disposable';

suite('Disposable Tests', () => {
  test('disposeAll should dispose all items and empty array', () => {
    let disposed = 0;
    const disposables = [
      { dispose: () => disposed++ },
      { dispose: () => disposed++ },
      { dispose: () => disposed++ },
    ];
    disposeAll(disposables);
    assert.strictEqual(disposed, 3);
    assert.strictEqual(disposables.length, 0);
  });

  test('disposeAll should handle empty array gracefully', () => {
    assert.doesNotThrow(() => disposeAll([]));
  });

  test('Disposable should not dispose twice', () => {
    let disposeCount = 0;
    class TestDisposable extends Disposable {
      constructor() {
        super();
        this._register({ dispose: () => disposeCount++ });
      }
    }
    const d = new TestDisposable();
    d.dispose();
    d.dispose();
    assert.strictEqual(disposeCount, 1);
  });

  test('Disposable._register should immediately dispose if already disposed', () => {
    let disposed = false;
    class TestDisposable extends Disposable {
      registerAfterDispose() {
        this._register({ dispose: () => (disposed = true) });
      }
    }
    const d = new TestDisposable();
    d.dispose();
    d.registerAfterDispose();
    assert.strictEqual(disposed, true);
  });

  test('Disposable.isDisposed should return correct state', () => {
    class TestDisposable extends Disposable {
      get disposed() {
        return this.isDisposed;
      }
    }
    const d = new TestDisposable();
    assert.strictEqual(d.disposed, false);
    d.dispose();
    assert.strictEqual(d.disposed, true);
  });
});
