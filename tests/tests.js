exports.defineAutoTests = function () {
    describe('(ACPAnalytics.extensionVersion)', function () {
        it('should exist', function () {
            expect(ACPAnalytics.extensionVersion).toBeDefined();
        });
        it('should be a function', function () {
            expect(typeof ACPAnalytics.extensionVersion === "function").toBe(true);
        });
        it('check if the result is a string', function (done) {
            ACPAnalytics.extensionVersion(function(result) {
                expect(typeof result === "string").toBe(true);
                done();
            }, function() {});
        });
    });

    describe('(ACPAnalytics.sendQueuedHits)', function () {
        beforeEach(function() {
          spyOn(console, 'log');
        })

        it('should print log to console stating success is not function', function(){
          ACPAnalytics.sendQueuedHits("success", function() {})
          expect(console.log).toHaveBeenCalled();
        })

        it('should print log to console stating error is not function', function(){
          ACPAnalytics.sendQueuedHits( function() {}, "error")
          expect(console.log).toHaveBeenCalled();
        })
    });

    describe('(ACPAnalytics.clearQueue)', function () {
        beforeEach(function() {
          spyOn(console, 'log');
        })

        it('should print log to console stating success is not function', function(){
          ACPAnalytics.clearQueue("success", function() {})
          expect(console.log).toHaveBeenCalled();
        })

        it('should print log to console stating error is not function', function(){
          ACPAnalytics.clearQueue( function() {}, "error")
          expect(console.log).toHaveBeenCalled();
        })
    });

    describe('(ACPAnalytics.getQueueSize)', function () {
        beforeEach(function() {
          spyOn(console, 'log');
        })

        it('should print log to console stating success is not function', function(){
          ACPAnalytics.getQueueSize("success", function() {})
          expect(console.log).toHaveBeenCalled();
        })

        it('should print log to console stating error is not function', function(){
          ACPAnalytics.getQueueSize( function() {}, "error")
          expect(console.log).toHaveBeenCalled();
        })
    });

    describe('(ACPAnalytics.getTrackingIdentifier)', function () {
        beforeEach(function() {
          spyOn(console, 'log');
        })

        it('should print log to console stating success is not function', function(){
          ACPAnalytics.getTrackingIdentifier("success", function() {})
          expect(console.log).toHaveBeenCalled();
        })

        it('should print log to console stating error is not function', function(){
          ACPAnalytics.getTrackingIdentifier( function() {}, "error")
          expect(console.log).toHaveBeenCalled();
        })
    });

    describe('(ACPAnalytics.getVisitorIdentifier)', function () {
        beforeEach(function() {
          spyOn(console, 'log');
        })

        it('should print log to console stating success is not function', function(){
          ACPAnalytics.getVisitorIdentifier("success", function() {})
          expect(console.log).toHaveBeenCalled();
        })

        it('should print log to console stating error is not function', function(){
          ACPAnalytics.getVisitorIdentifier( function() {}, "error")
          expect(console.log).toHaveBeenCalled();
        })
    });

    describe('(ACPAnalytics.setVisitorIdentifier)', function () {
        beforeEach(function(){
          spyOn(console, 'log');
        })

        it('should print log to console', function(){
          ACPAnalytics.setVisitorIdentifier(null, function(){}, function(){})
          expect(console.log).toHaveBeenCalled();
        })
    });
};