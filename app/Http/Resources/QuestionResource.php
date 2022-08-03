<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class QuestionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'slug' => $this->slug,
            'body' => $this->body,
            'created_at' => Carbon::parse($this->created_at)->diffForHumans(),
            'user'=> $this->user->name ?? 'user is wanted',
            'url'=> $this->getPath()
        ];
    }
}
