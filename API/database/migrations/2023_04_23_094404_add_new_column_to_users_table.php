<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string("username", 100);
            $table->int("age",11);
            $table->string("gender", 10);
            $table->string("profile_image", 255)->nullable();
            $table->string("banner", 255)->nullable();
            $table->text("bio", 255)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropIfExists("username");
            $table->dropIfExists("gender");
            $table->dropIfExists("profile_image");
            $table->dropIfExists("banner");
            $table->dropIfExists("bio");
        });
    }
};
