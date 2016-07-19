export default function() {
    this.Before(function() {
        require('babel-core/register')();
    });
}